import React, { Fragment, useState, useEffect } from 'react'
import useJsonFetch from './hooks/useJsonFetch'
import nanoid from 'nanoid'
import './App.css'
import Stopwatch from './Stopwatch'

export default function App() {
  const [items] = useJsonFetch('https://api.github.com/gists/public')
  const [data, setData] = useState()

  useEffect(() => {
    if(items.length > 0) {
      setData(items)
    }
  }, [items])

  return (
    <div>{data !== undefined && 
      (<Fragment>
        <h2>Тестовое задание UI5 </h2>
        <Stopwatch />
        <p>Создать таблицу gist файлов с github:</p>
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Название файла</th>
              <th>Язык</th>
              <th>Ссылка</th>
            </tr>
          </thead>

          <tbody>
            {data.map(function(obj) {
              let {files} = obj
              return Object.keys(files).map((i) => (
                <tr key={nanoid()}>
                  <td>{files[i].filename}</td>
                  <td>{files[i].language}</td>
                  <td>{files[i].raw_url}</td>
                </tr>
              ));
            })}
            
          </tbody>
        </table>
      </Fragment>)}
    </div>
  );
}