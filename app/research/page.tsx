export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Research</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How active stars complicate the search for planets
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          I study how activity on the surfaces of stars can make it harder to
          detect small planets. Starspots, magnetic fields, and other changing
          features can create signals that look similar to the signals produced
          by an orbiting planet.
        </p>
      </header>

      <section
        className="mt-16 border-t border-line py-16"
        aria-labelledby="jpl-project-heading"
      >
        <h2
          id="jpl-project-heading"
          className="font-serif text-3xl font-semibold text-ink"
        >
          Using the Sun to better understand other stars
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 leading-7 text-muted">
          <p>
            At NASA&apos;s Jet Propulsion Laboratory, I analyze detailed
            observations of sunlight collected with the PARVI spectrograph at
            Palomar Observatory. Because the Sun is the star we can study most
            closely, it provides a useful test case for understanding the
            behavior of more distant stars.
          </p>

          <p>
            Scientists can detect an exoplanet by measuring the tiny motion it
            causes in its host star. As a planet orbits, its gravity gently
            pulls the star back and forth. This motion slightly shifts the
            wavelengths of the star&apos;s light, an effect known as radial
            velocity.
          </p>

          <p>
            The challenge is that changes on the star itself can also shift or
            reshape its light. Magnetic regions, starspots, and other surface
            features may therefore imitate or hide the signal of a planet.
          </p>

          <p>
            My initial project focused on an iron absorption line near 1565
            nanometers that is especially sensitive to magnetic fields. An
            absorption line appears when atoms in the Sun&apos;s atmosphere
            remove light at a particular wavelength. I measured how the
            strength of this line changed over time to test whether it could
            track solar magnetic activity.
          </p>

          <p>
            I also studied a nearby feature caused by water vapor in
            Earth&apos;s atmosphere. This served as a control, helping me check
            whether the changes I observed came from the Sun rather than from
            changing atmospheric conditions above the telescope.
          </p>

          <p>
            The solar absorption lines showed patterns close to the Sun&apos;s
            rotation period, supporting the idea that magnetically sensitive
            lines may help identify activity-related signals. I am now
            extending the project to a longer set of observations and studying
            additional absorption lines at near-infrared wavelengths.
          </p>

          <p>
            The broader goal of this work is to improve our ability to separate
            signals caused by stars from signals caused by planets. Doing so
            will be especially important as astronomers search for smaller,
            potentially Earth-like worlds.
          </p>
        </div>
      </section>
    </main>
  );
}
