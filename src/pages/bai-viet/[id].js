import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
const id = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("get slug: ", router.query);
  }, [router]);

  return (
    <>
      <h3>Bài viết Chi tiết</h3>
    </>
  );
};

export default id;
