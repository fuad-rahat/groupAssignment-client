import React from 'react';

const Acordian = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl py-2 text-orange-400 font-bold ">Frequently Asked Questions:</h2>
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 text-left py-6 focus:outline-none focus-visible:ri">Q. What is the purpose of this platform?</summary>
				<p className="px-4 text-left py-6 pt-0 ml-4 -mt-4 text-orange-500">Our platform is designed to facilitate collaborative learning among friends. It allows users to create, complete, and grade assignments together, fostering a supportive and interactive study environment </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 text-left focus:outline-none focus-visible:ri">Q. Can I invite friends who are not registered users to join my group?</summary>
				<p className="text-left px-4 py-6 pt-0 ml-4 -mt-4 text-orange-500">While our platform is designed for registered users, you can still invite friends who are not yet registered to join your group. Simply send them an invitation to register on our platform, and once they're registered, they can easily join your group.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 text-left py-6 focus:outline-none focus-visible:ri">Q. How can I provide feedback or suggest improvements for the platform?</summary>
				<p className="text-left px-4 py-6 pt-0 ml-4 -mt-4 text-orange-500">We value user feedback and welcome suggestions for improving our platform. You can reach out to our support team directly through the "Contact Us" page or participate in our community forums to share your ideas and insights. Your feedback helps us enhance the platform for everyone's benefit.</p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Acordian;