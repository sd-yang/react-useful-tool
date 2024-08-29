import { Get, Post, request } from './request/fetch';
import { getJsonStr, parseAreaValue } from './string/string';

export default {
  fetchRequest: request,
  fetchGet: Get,
  fetchPost: Post,
  parseAreaValue,
  getJsonStr,
};
