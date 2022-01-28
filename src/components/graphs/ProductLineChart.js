function ProductLineChart() {
  return (
    <>
      <div className="bg-white rounded-md shadow-lg p-5">
        <h2>
          <strong>TOP PRODUCTS BY MERCHANT AND DATE</strong>
        </h2>
        <table class="divide-y divide-gray-200 min-w-full mt-5">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Merchant
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Store
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channel
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Merchant_1</td>
            <td>Store_1</td>
            <td>Channel_1</td>
            <td>Feeds</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Merchant_2</td>
            <td>Store_2</td>
            <td>Channel_2</td>
            <td>Feeds</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Merchant_3</td>
            <td>Store_3</td>
            <td>Channel_3</td>
            <td>Feeds</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Merchant_4</td>
            <td>Store_4</td>
            <td>Channel_4</td>
            <td>Feeds</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default ProductLineChart;
