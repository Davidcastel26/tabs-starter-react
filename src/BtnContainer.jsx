
export const BtnContainer = ({jobs}) => {
  return (
    <div className="btn-container">
        {jobs.map((item)=>{
            return <button 
                className="job-btn"
                key={item.id}
            >
                {item.company}
            </button>
        })}
    </div>
  )
}
