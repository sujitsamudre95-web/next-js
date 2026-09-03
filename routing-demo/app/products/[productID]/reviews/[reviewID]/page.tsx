export default async function ProductReview({
  params,
}: {
  params: Promise<{
    productID: string;
    reviewID: string;
  }>;
}) {
  const { productID, reviewID } = await params;

  return (
    <div>
      <h1>
        Review {reviewID} for product {productID}
      </h1>
    </div>
  );
}