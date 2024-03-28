// // components/Layout.js
// import { useEffect } from 'react';
// import Router from 'next/router';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

// const Layout = ({ children }) => {
//   useEffect(() => {
//     Router.events.on('routeChangeStart', () => NProgress.start());
//     Router.events.on('routeChangeComplete', () => NProgress.done());
//     Router.events.on('routeChangeError', () => NProgress.done());
//     return () => {
//       Router.events.off('routeChangeStart', () => NProgress.start());
//       Router.events.off('routeChangeComplete', () => NProgress.done());
//       Router.events.off('routeChangeError', () => NProgress.done());
//     };
//   }, []);

//   return <div>{children}</div>;
// };

// export default Layout;
