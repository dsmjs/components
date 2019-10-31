# Components

## Atomic Design

We strive to embrace the component driven nature of React and approach the
development of our site as a composition of small components to build bigger
and bigger components. This approach is also known as
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

Our components are roughly organized to align with the goals of
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), both in
the organization on the filesystem and in the interactive demos available in
our [Storybook Instance](https://dsmjs.com/components/).

## Styling

There are lots options out there for styling React components. For this
project, we have chosen to leverage [emotion](https://emotion.sh/) to apply
style rules in a way that encapulates them to the intended components. We
leverage its
[object-styles approach to define rules with the `css` prop](https://emotion.sh/docs/css-prop#object-styles).
Also, we've configured our build [to use](https://emotion.sh/docs/css-prop#babel-preset)
the [emotion css-prop babel preset](https://emotion.sh/docs/@emotion/babel-preset-css-prop),
so there is no need to import any emotion dependencies into the component
modules.
