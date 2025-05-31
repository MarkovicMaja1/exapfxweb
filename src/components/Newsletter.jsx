import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="bg-[#151515] relative isolate overflow-hidden py-16 sm:py-24 lg:py-8">
      <div className="max-w-7xl mx-auto px-8 paddingTeam rounded-2xl bg-[#151515] px-6 py-12 shadow-xl ring-1 ring-white/10 lg:px-12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h3 className="text-4xl font-semibold tracking-tight text-white">Stay up to date with our newsletter</h3>
            <p className="mt-4 text-lg text-white">
              Get trading insights, strategy tips, and updates on challenges, direct to your inbox. Stay ahead in the
              markets with content crafted for prop traders.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#1D8348] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#2ECC71] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D8348]"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly insights</dt>
              <dd className="mt-2 text-base/7 text-white">
                Receive professional trading tips, market overviews and risk management techniques from top traders.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Zero spam policy</dt>
              <dd className="mt-2 text-base/7 text-white">
                We respect your time and inbox. Only valuable trading content and no nonsense.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            width: '288.75px',
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] bg-[#151515]"
        />
      </div>
    </div>
  )
}