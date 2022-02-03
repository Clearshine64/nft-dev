export const Rabble = (props) => {
  return (
    <div id='rabble' className='text-center'>
      <div className='container'>
      <div className='row section-title'>
            <div className="col-sm-12 col-md-12">
              <h2 style={{color:'#FF3030'}}>THE RABBLE</h2>
            </div>
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/1-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/2-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/3-'+i+'.jpg'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img src={'img/member/4-'+i+'.jpg'} style={{marginBottom:'20px'}}/></div>
            )}
          </div>

      </div>
    </div>
  )
}
