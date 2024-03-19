import './paragrafo.css'

const Paragrafo = ({ color, font }) => {
  return (
    <>
      <div className='paragrafo'>
        <p className='text' style={{ color: `${color}`, textTransform: `${font}` }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates assumenda maxime ipsa suscipit, doloremque repudiandae facilis sequi amet quam nihil tempore sapiente laborum minima ratione architecto labore nemo repellat magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi eligendi possimus tenetur adipisci, soluta cupiditate quas libero fuga similique veritatis tempore ratione repellendus praesentium, consequuntur, reprehenderit amet nulla mollitia!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores inventore repellendus, eaque dolorem dolor assumenda dolores dicta labore aperiam obcaecati libero accusantium explicabo. Necessitatibus hic voluptas expedita, magni obcaecati illo!
        </p>
      </div>
    </>
  )
}

export default Paragrafo
