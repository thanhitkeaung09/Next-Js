import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices,fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
// import { fetchRevenue } from "../lib/data";

 
export default async function Page() {
  // const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,} = await fetchCardData();

    // console.log(numberOfCustomers,totalPaidInvoices,totalPendingInvoices);
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
         <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
         <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}




// async function getData() {
//   // const res = await fetch('https://api.example.com/...')
//   const res = await fetchRevenue();
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error('Failed to fetch data')
//   // }
//   console.log(res);
//   return res
// }
 
// export default async function Page() {
//   const data = await getData()
 
//   return <main>hello</main>
// }


// async function getData() {
//   const res = await fetch('https://fakestoreapi.com/products')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
//   console.log(res.json);

//   return res.json()
// }
 
// export default async function Page() {
//   const data = await getData()
 
//   return <main>
//     {
//       data.map((el : any , index : string)=>{
//         return (
//           <h1 key={index}>{el.title}</h1>
//         )
//       })
//     }
//     </main>
// }