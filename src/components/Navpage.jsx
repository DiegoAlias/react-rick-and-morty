export const Navpage = ({ page, setPage }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="text-lg">Page: {page}</p>
      <button
        className="bg-blue-500 py-1 px-2 rounded-lg hover:bg-blue-700"
        onClick={() => setPage(page + 1)}
      >
        Page {page}
      </button>
    </div>
  );
};
