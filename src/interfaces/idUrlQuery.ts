import { ParsedUrlQuery } from "querystring";

export interface IIdUrlQuery extends ParsedUrlQuery {
  id: string;
}
