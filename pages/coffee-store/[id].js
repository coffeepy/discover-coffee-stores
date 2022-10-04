import { useRouter } from "next/router";
import Link from "next/link";
const CoffeStore = () => {
  const router = useRouter();

  return (
    <div>
      <div>Coffee Store Page {router.query.id}</div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default CoffeStore;
