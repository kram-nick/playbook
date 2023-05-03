export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum UIRoutes {
  HOME = "home",
  SQUEEZE_SALES = "squeeze-sales",
  SQUEEZE_PRODUCT = "squeeze-product",
  SQUEEZE_ENGINEERING = "squeeze-engineering",
  SQUEEZE_ENTREPRENEUR = "squeeze-entrepreneur",
  TERM_OF_USE = "term-of-use",
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up",
}

export enum PrivateUIRoutes {
  Main = "main",
  Create = "create",
  Chapters = "chapters",
  Preview = "preview",
  PreviewChapter = 'preview-chapter'
}
