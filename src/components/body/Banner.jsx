export default function Banner() {
  return (
    <div className="my-6">
      <div className="container mx-auto bg-gray-200">
        <h1 className="text-5xl ml-30 pt-10">A warm welcome!</h1>
        <p className="ml-30 mt-5 mr-30 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          exercitationem, illo pariatur hic aspernatur, consequuntur a vel
          soluta quam provident tempora quibusdam repellendus dignissimos quod
          aut odit voluptatum, nisi mollitia.
        </p>
        <button
          type="button"
          className="mb-10 ml-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Call to action!
        </button>
      </div>
    </div>
  );
}
