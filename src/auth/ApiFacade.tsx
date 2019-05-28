class ApiFacade {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  getAccessToken = () => {
    return this.accessToken;
  };

  setAccessToken = (accessToken: string) => {
    this.accessToken = accessToken;
  };
}

export default ApiFacade;
