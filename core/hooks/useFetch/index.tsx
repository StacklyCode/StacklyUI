import { atom, useAtom } from "jotai";
import { DependencyList, useEffect } from "react";
import { RDC } from "types";

type IResponseType = "json" | "text";

type PropsSettings<IData = RDC, IError = RDC> = {
  url: RequestInfo;
  onCompleted?: (e: IData) => void;
  onError?: (e: IError) => void;
  options?: RequestInit;
  type?: IResponseType;
};

type IFetch<IData = RDC, IError = RDC> = {
  data?: IData;
  loading?: boolean;
  error?: IError;
};

const fetchData = atom({});
const fetchError = atom({});
const fetchLoading = atom(true);

const fetchStateAtom = atom(
  (get) => ({
    data: get(fetchData),
    error: get(fetchError),
    loading: get(fetchLoading),
  }),
  (_, set, arg: IFetch) => {
    set(fetchData, arg.data);
    set(fetchError, arg.error);
    set(fetchLoading, arg.loading);
  }
);

const convertResponse = (response: Response, type?: IResponseType) => {
  switch (type) {
    case "json":
      return response.json();
    case "text":
      return response.text();
    default:
      return response.json();
  }
};

const useFetch = <IData = RDC, IError = RDC>(
  setings: PropsSettings<IData, IError>,
  deps?: DependencyList
): IFetch<IData, IError> => {
  const { url, onCompleted, onError, options } = setings;
  const [fetchState, setFetchState] = useAtom(fetchStateAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...options,
        });
        const data = await convertResponse(response, setings.type);
        setFetchState({ error: null, data, loading: false });
        onCompleted?.(data);
      } catch (error) {
        setFetchState({ data: null, error, loading: false });
        onError?.(error);
      }
    };

    fetchData();
  }, [url, deps]);

  return fetchState as IFetch<IData, IError>;
};

export default useFetch;
