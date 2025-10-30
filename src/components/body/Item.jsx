export default function Item() {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        <a href="#">
          <img className="rounded-t-lg w-full" src="./public/img.jpg" alt />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Card Tilte
            </h5>
          </a>
          <p className="mb-3 font-normal text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            quisquam cum rerum labore error quis odio quas culpa ducimus
            placeat. Harum, odit id quidem facere aliquam ipsum enim accusantium
            a?
          </p>
          <div className="mt-4 bg-gray-200 p-4 -mx-5 -mb-5 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Find out more!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
