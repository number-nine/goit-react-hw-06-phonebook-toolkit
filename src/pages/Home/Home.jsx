import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactEditor from 'components/ContactEditor';

export default function Home() {
  return (
    <main>
      <Section title="Contact editor">
        <ContactEditor />
      </Section>
      <Section title="Filter Contacts">
        <Filter />
      </Section>
      <Section title="Contacts List">
        <ContactsList />
      </Section>
    </main>
  );
}
