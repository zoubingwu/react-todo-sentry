import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { history } from "./history";


if (process.env.NODE_ENV === 'production') {
  const release = `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}+${process.env.REACT_APP_COMMIT_HASH}`;
  console.log('release: ', release);
  Sentry.init({
    dsn: "https://3b736208b89d440b9e86efbd27a6c1e3@o569408.ingest.sentry.io/5715114",
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
      }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    release: release,
  });
}
