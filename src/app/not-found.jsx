import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      {/* <h2>404 Not Found</h2> */}
      <h2 className="text-3xl font-bold">Coming Soon!!</h2>
      <p className="mb-5">Website masih dalam pengembangan</p>
      <Link href="/">Kembali ke Home</Link>
      {/* <Link href="/">Return Home</Link> */}
    </div>
  );
}
