import Section from 'components/Section';
import ContactsList from 'components/ContactsList';

export default function Home() {
  return (
    <main>
      <Section title="Filter Contacts"></Section>
      <Section title="Contacts List">
        <ContactsList />
      </Section>
    </main>
  );
}
