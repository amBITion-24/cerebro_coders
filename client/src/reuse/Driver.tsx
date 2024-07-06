const Driver = ({
  name,
  place,
  email,
  phone,
}: {
  name: string;
  place: string;
  email: string;
  phone: string;
}) => {
  return (
    <div className="flex bg-base-200 my-6 mx-7 p-4 rounded-md">
      <div className=" pr-4 flex items-center">
        <div className="w-[7vh] h-[7vh]  flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1 py-2">
        <div className="space-y-3">
          <div className="text-xl">available driver {name}</div>
          <div className="text-xl">in {place}</div>
          <div className="text-xl">contact : {email}</div>
          {phone}
        </div>
      </div>
    </div>
  );
};
export default Driver;
