import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import i18n from "i18next";

const Table = () => {
  const {t} = useTranslation();
  const statistics = useSelector(state => state.statistics.data);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm firago-medium text-gray-500 uppercase tracking-wider"
                >
                  {t('country')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm firago-medium text-gray-500 uppercase tracking-wider"
                >
                  {t('confirmed')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm firago-medium text-gray-500 uppercase tracking-wider"
                >
                  {t('recovered')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm firago-medium text-gray-500 uppercase tracking-wider"
                >
                  {t('death')}
                </th>
              </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {statistics.map((statistic) => (
                <tr key={statistic.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-10">
                        <img className="h-8 w-10 rounded" src={process.env.REACT_APP_BASE_FRONTEND_URL + "/flags/" + statistic.country.code.toLowerCase() + ".svg"} alt=""/>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{statistic.country.code}</div>
                        <div className="text-sm text-gray-500">{statistic.country.name[i18n.language]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-yellow-100 text-yellow-800">{statistic.confirmed}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-green-100 text-green-800">{statistic.recovered}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className="py-1 px-4 inline-flex text-sm leading-5 firago-medium rounded-full bg-red-100 text-red-800">{statistic.death}</span>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;