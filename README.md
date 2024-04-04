This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, install any dependencies
```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![alt picture of home page](https://github.com/Susannah-Parsons/ReRenderBug/blob/main/HomePage.png)

Assuming you have React dev tools on your browser, run the profiler. Now click the 'CHANGE HISTORY' button, which runs the code 
```javascript
window.history.replaceState(null, "", `?test=test`);
```
 and stop the profiler. You can see that only the search parameters and not the path parameters on the url have changed, yet ClientComponent (which reads the path parameters using the nextjs useParams hook) is Re-Rendered anyway.

![alt example of profiler output](https://github.com/Susannah-Parsons/ReRenderBug/blob/main/ClientComponentRerenders.png)
