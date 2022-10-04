import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      <div>Page {router.query.dynamic}</div>
    </div>
  );
};

export default DynamicRoute;
