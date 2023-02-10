import axios, {Canceler, AxiosResponse} from 'axios';
import {path} from 'ramda';

enum AxiosRequestMethods {
  Delete = 'delete',
  Get = 'get',
  Patch = 'patch',
  Post = 'post',
  Put = 'put',
}

let cancel: Canceler | undefined;

let instance = axios.create();

const cancelableRequest = <T>(method: AxiosRequestMethods, url: string) => {
  if (cancel !== undefined) {
    cancel();
    cancel = undefined;
  }

  return instance[method]<T>(url, {
    cancelToken: new axios.CancelToken((cancelToken) => (cancel = cancelToken)),
  });
};

const getResponseURL = (val: unknown) => {
  if (typeof val === 'string') {
    return val;
  } else {
    return null;
  }
};

const resolveInterceptor = (response: AxiosResponse) => {
  const request = response.request;
  const responseURL = getResponseURL(request.responseURL);
  const configUrl = response.config.url;

  if (configUrl && responseURL && !responseURL.includes(configUrl)) {
    location.href = responseURL;
  }

  return response;
};

const setCmsAxiosDefaults = () => {
  instance = axios.create({
    timeout: 90000,
  });

  instance.interceptors.response.use(resolveInterceptor);
};

const getAxios = () => instance;

const getErrorCode = path(['response', 'data', 'internalErrorCode']);

export {
  cancelableRequest,
  getAxios,
  getErrorCode,
  instance as axios,
  setCmsAxiosDefaults,
};
