export const Button = ({color, text}) => {
  return (
    <button className={`w-56 h-10 sm:h-14 flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-black hover:bg-red-600 rounded-2xl p-3 transition duration-150 ease-in ${color}`}>
      {text}
    </button>
  )
}