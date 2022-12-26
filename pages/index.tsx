import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [val, setVal] =useState("")

  const clickHandle = (e:any)=>{
    setVal(val + e.target.value)
  }

  const clearHandler = () =>{
    setVal("")
  }

  const delHandler = () =>{
    setVal(val.slice(0 , -1))
  }

  const equalHandler = ()=>{
    try {
      setVal(eval(val))
    } catch (error) {
      setVal("error")
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-primary mb-3">
              <div className="card-body tex-primary">
                <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value={val} />
                  <div className="row">
                    <div className="col-6">
                      <button className={styles.row} onClick={clearHandler}>Clear</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} onClick={delHandler}>Del</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="/" onClick={clickHandle}>&divide;</button>
                    </div>
                  </div>
                  
                  <div className="row mt-3">
                    <div className="col">
                      <button className={styles.row} value="7" onClick={clickHandle}>7</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="8" onClick={clickHandle}>8</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="9" onClick={clickHandle}>9</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="*" onClick={clickHandle}>&times;</button>
                    </div> 
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <button className={styles.row} value="4" onClick={clickHandle}>4</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="5" onClick={clickHandle}>5</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="6" onClick={clickHandle}>6</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="-" onClick={clickHandle}>&minus;</button>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <button className={styles.row} value="1" onClick={clickHandle}>1</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="2" onClick={clickHandle}>2</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="3" onClick={clickHandle}>3</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="+" onClick={clickHandle}>+</button>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <button className={styles.row} value="0" onClick={clickHandle}>0</button>
                    </div>
                    <div className="col">
                      <button className={styles.row} value="." onClick={clickHandle}>.</button>
                    </div>
                    <div className="col-6">
                      <button className={styles.row} onClick={equalHandler}>=</button>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
