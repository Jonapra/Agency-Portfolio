import React from 'react';
import { Header } from '@/components/ui/header-2';

function App() {
	return (
		<div className="w-full">
			<Header />

			<main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-orange-500">New Agency Portfolio</h1>
          <p className="mt-4 text-lg">Project initialized with Design System tokens.</p>
        </div>

				<div  className="space-y-2 mb-4">
					<div className="bg-muted h-6 w-4/6 rounded-md border" />
					<div className="bg-muted h-6 w-1/2 rounded-md border" />
				</div>
				<div  className="flex gap-2 mb-8">
					<div className="bg-muted h-3 w-14 rounded-md border" />
					<div className="bg-muted h-3 w-12 rounded-md border" />
				</div>

				{Array.from({ length: 7 }).map((_, i) => (
					<div key={i} className="space-y-2 mb-8">
						<div className="bg-muted h-4 w-full rounded-md border" />
						<div className="bg-muted h-4 w-full rounded-md border" />
						<div className="bg-muted h-4 w-full rounded-md border" />
						<div className="bg-muted h-4 w-1/2 rounded-md border" />
					</div>
				))}
			</main>
		</div>
	);
}

export default App;
