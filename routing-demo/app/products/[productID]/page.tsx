export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;

  return (
    <div>
      <h1>Details about product</h1>
      <h2>Product ID: {productID}</h2>
    </div>
  );
}