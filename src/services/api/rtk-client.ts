import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { config } from 'config';
import { ApiUrl } from 'services/constants';

// Define a type for the expected refresh response
interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

const PrimaryQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const fetchArgs = typeof args === 'string' ? { url: args } : args;
  const { url, ...rest } = fetchArgs;

  const baseQuery = fetchBaseQuery({
    baseUrl: config.env.BACKEND_URL,
    prepareHeaders: (headers: Headers) => {
      // Retrieve the latest token from local storage each time
      const token = ''; // This should get the token from local storage
      headers.set('ngrok-skip-browser-warning', '69420');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  });

  return baseQuery({ url, ...rest }, api, extraOptions);
};

// Create a new mutex
const mutex = new Mutex();

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // Wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await PrimaryQuery(args, api, extraOptions);

  // If headers have "x-temp-token" then we don't need to re-auth
  const headers = (args as FetchArgs)?.headers as Record<string, string | undefined>;
  if (headers && headers['x-temp-token']) {
    return result;
  }

  if (result.error && result.error.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await PrimaryQuery(
          {
            url: ApiUrl.RENEW_AUTH,
            method: 'POST',
            body: { refresh_token: '' },
          },
          api,
          extraOptions
        );

        const refreshData = refreshResult.data as RefreshTokenResponse;
        if (refreshData && refreshData.access_token && refreshData.refresh_token) {
          // Token.setToken(refreshData.access_token);
          // Token.setRefreshToken(refreshData.refresh_token);
          result = await PrimaryQuery(args, api, extraOptions);
        } else {
          // Token.clearToken();
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error during re-authentication:', error);
      } finally {
        release();
      }
    } else {
      // Wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await PrimaryQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const rtkClient = createApi({
  reducerPath: 'rtkClient',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: [],
});
