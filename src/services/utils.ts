const delayRequest = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const parseParams = (params: string): Record<string, string> => {
  return params.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    return { ...acc, [key]: value };
  }, {});
};

const serializeParams = (params: Record<string, string | number | boolean>): string => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};

export { delayRequest, parseParams, serializeParams };
