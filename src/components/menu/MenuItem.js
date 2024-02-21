/* eslint-disable @next/next/no-img-element */
export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-gray-50 hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
      <img className="max-h-24 max-w-auto block mx-auto" src="/pizza.png" alt="Food Image" />
      </div>
      <h4 className="font-semibold text-lg my-2">Pepproni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime
        quos voluptates quod laboriosam rem?
      </p>
      <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">
        Add to cart $12{" "}
      </button>
    </div>
  );
}
