import {
  createClient as baseCreateClient,
  Route,
  type ClientConfig,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import slicemachineConfig from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = slicemachineConfig.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is
 * resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: Route[] = [
  { type: "home", path: "/" },
  { type: "contact", path: "/contact" },
  { type: "mentions", path: "/mentions" },
  { type: "websites", path: "/websites" },
  { type: "website", path: "/websites/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: ClientConfig = {}) => {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};
