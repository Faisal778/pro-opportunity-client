import React from 'react';

const Testemonial = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Finding the right job can be tough, but PrO-Opportunity made it a breeze!
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “Opportunity connected me with the perfect job at Acme Inc. Their platform is user-friendly and efficient, making the whole process smooth.”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Rock Lee</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Rock Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    Opportunity's skills assessment helped me identify areas for growth. I used the platform to showcase my new skills and landed a promotion!”.
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-blue-500">Lilith Brown</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    );
};

export default Testemonial;