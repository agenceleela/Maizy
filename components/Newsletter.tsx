import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 px-4 bg-maizy-charcoal text-white">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          JOIN THE MOVEMENT
        </h2>
        <p className="text-gray-400">
          Get first access to new drops, exclusive releases, and member-only events.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-maizy-green transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-maizy-green text-white font-medium tracking-wider hover:bg-maizy-yellow hover:text-maizy-charcoal transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-xs text-gray-500">
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
