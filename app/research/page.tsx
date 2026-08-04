```tsx
export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="eyebrow">Research</p>

        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How active stars complicate the search for planets
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          I study how magnetic activity on stars can make it harder to detect
          small planets. Starspots, magnetic regions, and other changing
          features on a star&apos;s surface can produce signals that resemble
          or hide the signal of an orbiting planet.
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
            At NASA&apos;s Jet Propulsion Laboratory, I analyze
            high-resolution observations of the Sun collected with the PARVI
            spectrograph and the SoCalSoCal solar feed at Palomar Observatory.
            Because the Sun is the star we can study most closely, it gives us
            a useful way to investigate how stellar activity affects
            observations of more distant stars.
          </p>

          <p>
            One way to detect an exoplanet is to measure the small motion it
            causes in its host star. As a planet orbits, its gravity pulls the
            star slightly back and forth, causing small shifts in the
            wavelengths of the star&apos;s light. This is known as the radial
            velocity method.
          </p>

          <p>
            The challenge is that activity on the star itself can also change
            the shapes and positions of its absorption lines. These changes can
            imitate a planet signal or make a real planet more difficult to
            detect.
          </p>

          <p>
            My initial project focused on a strongly magnetically sensitive Fe
            I absorption line near 1565 nanometers. I measured how the strength
            of this line changed over time to test whether it could trace
            magnetic activity on the Sun.
          </p>

          <p>
            I also study two nearby Fe I lines and a Ni I line in the same
            region of the near-infrared spectrum. Comparing several lines helps
            me determine whether they respond similarly to solar activity and
            whether some lines are more useful activity indicators than
            others.
          </p>

          <p>
            More recently, I began analyzing a Mn I line near 1290 nanometers.
            This line was identified as sensitive to stellar rotation in a
            previous NIRPS study of M-dwarf stars. I am now investigating
            whether it shows similar behavior in observations of the Sun.
          </p>

          <p>
            Before measuring the stellar lines, I use Stellar-GFIT to model and
            remove absorption caused by Earth&apos;s atmosphere, known as
            telluric absorption. Because small atmospheric features may remain
            after this correction, I also analyze a nearby H₂O absorption line
            as a control. This helps me check whether the variability in the
            stellar lines is truly coming from the Sun or whether some
            atmospheric contamination remains.
          </p>

          <p>
            Several of the solar absorption lines show patterns near the
            Sun&apos;s rotation period, supporting the idea that magnetically
            sensitive near-infrared lines may help identify signals caused by
            stellar activity. I am now extending the project to a longer set of
            observations and comparing the behavior of the Fe I, Ni I, and Mn I
            lines.
          </p>

          <p>
            The broader goal of this work is to better separate signals caused
            by stars from signals caused by planets. Improving that distinction
            will be especially important as astronomers search for smaller,
            potentially Earth-like exoplanets.
          </p>
        </div>
      </section>
    </main>
  );
}
```
