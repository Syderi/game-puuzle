// import { option } from './_type'

// interface ISource {
//     category: string;
//     country: string;
//     description: string;
//     id: string;
//     language: string;
//     name: string;
//     url: string;
// }

// interface INews {
//     author: string;
//     content: string;
//     description: string;
//     publishedAt: string;
//     source: {
//         id: string,
//         name: string
//     };
//     title: string;
//     url: string;
//     urlToImage: string;
// }

// interface IGetResp {
//     endpoint: string;
//     options?: Partial<option>;
// }


// interface IDrawSources {
//     status: string;
//     sources: ISource[];
// }

// interface IdrawNews {
//     status: string;
//     totalResults: number;
//     articles: INews[];

// }

// interface IdrawNewsError {
//     status: string;
//     code: string;
//     message: string;
// }

// export { ISource, INews, IGetResp, IDrawSources, IdrawNews, IdrawNewsError }]


interface ICar {
    name: string;
    color: string;
    id: number;
  }

  export { ICar }