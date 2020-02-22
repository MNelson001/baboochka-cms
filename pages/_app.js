import App from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class PwaGenerator extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
  
      return { pageProps }
    }
  
    render() {
      const { Component, pageProps } = this.props
  
      return (
        <>
          <Head>
            <title>Pwa Generator</title>
          </Head>
          <Component {...pageProps} />

          <style jsx global>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
                height: 100%;
            }

            body {
                margin: 0px;
            }
          `}</style>
        </>
      )
    }
  }