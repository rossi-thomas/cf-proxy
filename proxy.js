export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="2dpy5r-8787.csb.app";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
