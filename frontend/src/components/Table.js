import {useTranslation} from "react-i18next";
import i18n from "i18next";
import Heading from "./Table/Heading";
import Row from "./Table/Row";
import Cell from "./Table/Cell";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import DefaultField from "./DefaultField";

const Table = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState(null)
  const {setParams, data, loading, error} = useFetch('/statistics/filter', null)
  const [sort, setSort] = useState({
    confirmed: {
      'column': 'confirmed',
      'direction': 'desc'
    },
    recovered: {
      'column': 'recovered',
      'direction': 'asc'
    },
    death: {
      'column': 'death',
      'direction': 'asc'
    }
  })

  useEffect(() => {
    if (search !== null) {
      const delay = setTimeout(() => {
        setParams(prevState => ({
          ...prevState,
          search
        }))
      }, 500)

      return () => clearTimeout(delay)
    }
  }, [search, setParams])

  const handleColumnClick = (column, direction) => {
    Object.values(sort).map(item => {
      if(item.column === column) {
        setSort(prevState => ({
          ...prevState,
          [column]: {
            column: column,
            direction: direction === 'asc' ? 'desc' : 'asc'
          }
        }))
      }
    })
    setParams(prevState => ({
      ...prevState,
      column,
      direction
    }))
  }

  return (
    <div className="flex flex-col">
      <div className="flex -mx-2 space-y-4 md:space-y-0 my-5">
        <DefaultField type="text" offFull={true} startElement={2} element={5} placeholder={t('search')} onChange={setSearch}/>
      </div>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-sm overflow-hidden border-b border-gray-200 sm:rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-slate-50">
              <tr>
                <Heading title={t('country')}/>
                <Heading sortable={true} column={sort.confirmed.column} direction={sort.confirmed.direction} title={t('confirmed')} onClick={handleColumnClick}/>
                <Heading sortable={true} column={sort.recovered.column} direction={sort.recovered.direction} title={t('recovered')} onClick={handleColumnClick}/>
                <Heading sortable={true} column={sort.death.column} direction={sort.death.direction} title={t('death')} onClick={handleColumnClick}/>
              </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200"
              >
              {!loading
                ? data.map((statistic) => (
                  <Row key={statistic.id}>
                    <Cell>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-10">
                          <img className="h-8 w-10 rounded"
                               src={process.env.REACT_APP_BASE_FRONTEND_URL + "/flags/" + statistic.country.code.toLowerCase() + ".svg"}
                               alt=""/>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm firago-medium text-gray-900">{statistic.country.code}</div>
                          <div
                            className="text-sm firago-medium text-gray-500">{statistic.country.name[i18n.language]}</div>
                        </div>
                      </div>
                    </Cell>
                    <Cell>
                      <span
                        className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-yellow-100 text-yellow-800">{statistic.confirmed}</span>
                    </Cell>
                    <Cell>
                      <span
                        className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-green-100 text-green-800">{statistic.recovered}</span>
                    </Cell>
                    <Cell>
                      <span
                        className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-red-100 text-red-800">{statistic.death}</span>
                    </Cell>
                  </Row>
                ))
                : <Row>
                  <Cell>                  <svg role="status"
                                               className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                               viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"/>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"/>
                  </svg><span className="firago-medium-upper">{t('loading')}</span></Cell>
                </Row>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;