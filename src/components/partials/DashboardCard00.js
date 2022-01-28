import {
  UserGroupIcon,
  HomeIcon,
  ExclamationIcon,
  TrendingUpIcon,
  ShoppingCartIcon,
  UserAddIcon,
  UsersIcon,
  MenuAlt2Icon,
} from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

const DashboardCard00 = () => {
  const [count, useCounter] = useState(0);

  const Increment = () => {
    useCounter(count + 1);
  };

  return (
    <div class="grid gap-4 grid-cols-5 mb-5">
      {/* Tooltips */}
      <div
        class="bg-blue-700 text-white rounded-md h-32 flex shadow-lg	cursor-pointer transition ease-in-out"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="“by following this link, you will be redirected
        to Merchants"
      >
        <div class="bg-blue-600 rounded-md">
          <UserGroupIcon className="h-10 w-10 m-2 mt-5" aria-hidden="true" />
        </div>
        <div class="m-5">
          <h2 class="font-bold text-4xl">{count}</h2>
          <p>Mechants</p>
        </div>
      </div>
      <div
        class="bg-indigo-700 text-white rounded-md h-32 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="“by following this link, you will be redirected
              to Stores"
      >
        <div class="bg-indigo-600 rounded-md">
          <HomeIcon className="h-10 w-10 m-2 mt-5" aria-hidden="true" />
        </div>

        <div class="m-5">
          <h2 class="font-bold text-4xl">{count}</h2>
          <p>Stores</p>
        </div>
      </div>
      <div
        class="bg-violet-700 text-white rounded-md h-32 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="“by following this link, you will be redirected
              to stores with product errors"
      >
        <div class="bg-violet-600 rounded-md">
          <ExclamationIcon className="h-10 w-10 m-2 mt-5" aria-hidden="true" />
        </div>

        <div class="m-5">
          <h2 class="font-bold text-4xl">5</h2>
          <p>Stores with Product Errors</p>
        </div>
      </div>
      <div
        class="bg-purple-700 text-white rounded-md h-32 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="“by following this link, you will be redirected
              to Total Referrals Today"
      >
        <div class="bg-purple-600 rounded-md">
          <TrendingUpIcon className="h-10 w-10 m-2 mt-4" aria-hidden="true" />
        </div>

        <div class="m-5">
          <h2 class="font-bold text-4xl">15</h2>
          <p>Total Referrals Today</p>
        </div>
      </div>
      <div
        class="bg-fuchsia-700 text-white rounded-md h-32 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="“by following this link, you will be redirected
              to Total Sales Today"
      >
        <div class="bg-fuchsia-600 rounded-md">
          <ShoppingCartIcon className="h-10 w-10 m-2 mt-4" aria-hidden="true" />
        </div>

        <div class="m-5">
          <h2 class="font-bold text-4xl">500</h2>
          <p>Total Sales Today</p>
        </div>
      </div>
      <div
        onClick={Increment} 
        class="bg-blue-700 text-white rounded-md h-12 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Click to Add New Merchant"
      >
        <div class="bg-blue-600 rounded-md">
          <UserAddIcon className="h-6 w-6 m-2 mt-3" aria-hidden="true" />
        </div>

        <div class="m-3">
          <p>Add New Merchant</p>
        </div>
      </div>
      <div
        class="bg-indigo-700 text-white rounded-md h-12 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Click to Reassign Merchant"
      >
        <div class="bg-indigo-600 rounded-md">
          <UsersIcon className="h-6 w-6 m-2 mt-3" aria-hidden="true" />
        </div>

        <div class="m-3">
          <p>Reassign Merchant</p>
        </div>
      </div>
      <div
       onDoubleClick={() => handleReset()} onClick={() => onHandleClick()}>Shuffle
        class="bg-violet-700 text-white rounded-md h-12 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Click to Add New Store"
      >
        <div class="bg-violet-600 rounded-md">
          <ShoppingCartIcon className="h-6 w-6 m-2 mt-3" aria-hidden="true" />
        </div>

        <div class="m-3">
          <p>Add New Store</p>
        </div>
      </div>
      <div class="bg-purple-700 text-white rounded-md h-12 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101">
        <div class="bg-purple-600 rounded-md">
          <MenuAlt2Icon className="h-6 w-6 m-2 mt-3" aria-hidden="true" />
        </div>

        <div class="m-3">
          <p>Extra Card</p>
        </div>
      </div>
      <div class="bg-fuchsia-700 text-white rounded-md h-12 flex shadow-lg	cursor-pointer transition ease-in-out delay-150 hover:opacity-75 hover:-translate-y-1 hover:scale-101">
        <div class="bg-fuchsia-600 rounded-md">
          <MenuAlt2Icon className="h-6 w-6 m-2 mt-3" aria-hidden="true" />
        </div>

        <div class="m-3">
          <p>Extra Card</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard00;
