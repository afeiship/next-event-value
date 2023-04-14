interface IOptions {
  path?: string;
}

interface NxStatic {
  eventValue(event: any, options: IOptions): any;
}
