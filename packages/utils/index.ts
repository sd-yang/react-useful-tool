import { Get, Post, request } from './request/fetch';
import { parseAreaValue } from './string/string';

export default {
  fetchRequest: request,
  fetchGet: Get,
  fetchPost: Post,
  parseAreaValue
};
