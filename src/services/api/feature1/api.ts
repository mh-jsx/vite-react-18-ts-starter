import { rtkClient } from 'services/api';

const feature1Api = rtkClient.injectEndpoints({
  endpoints: (builder) => ({
    feature: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useFeatureQuery } = feature1Api;
export default feature1Api.reducer;
