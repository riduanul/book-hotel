

function loader() {
  return (
    <div id='loader ' className=" bg-[#8100cc] w-[100px] h-[40px] absolute top-[50%] left-[50%] -my-[20px] -mx-[50px] rounded-xl p-3" style={{
        animation: 'my-animation 2s linear infinite',
        '@keyframes my-animation': {
          '0%': {
            left: '100px',
            top: '0',
          },
          '80%': {
            left: '0',
            top: '0',
          },
          '85%': {
            left: '0',
            top: '-20px',
            width: '20px',
            height: '20px',
          },
          '90%': {
            width: '40px',
            height: '15px',
          },
          '95%': {
            left: '100px',
            top: '-20px',
            height: '20px',
            width: '20px',
          },
          '100%': {
            left: '100px',
            top: '0',
          }
        }
      }}>
        <div id='d1 ' className=" w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite delay-200ms "></div>
        <div id='d2' className="w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite -delay-400ms"></div>
        <div id='d3' className="w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite -delay-600ms"></div>
        <div id='d4' className="w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite -delay-800ms"></div>
        <div id='d5' className="w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite -delay-1020ms"></div>
        <div id='d6' className="w-[20px] h-[20px] bg-[#FFF] rounded-md absolute animate-bounce linear infinite -delay-1060ms"></div>
   
    </div>
  )
}

export default loader