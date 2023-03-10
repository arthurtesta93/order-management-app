import { useRecordContext, List, Datagrid, TextField, Edit, SimpleForm, TextInput, ReferenceInput, Create, EditButton, SelectInput, NumberInput } from "react-admin";


const organizationsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Name" reference="name" />,
];


export const OrganizationsList = () => (
  <List filters={organizationsFilters}>
   <Datagrid>
     <TextField source="name" />
      <TextField source="kind" />
      <EditButton />
    </Datagrid>
  </List>
);

const OrganizationsTitle = () => {
      const record = useRecordContext();
      return <span>Organization {record ? `"${record.name}"` : ''}</span>;
    };

const OrganizationKindChoices = [
  { id: 'BUYER', name: 'Buyer' },
  { id: 'SELLER', name: 'Seller' },
  { id: 'CARRIER', name: 'Carrier' },
  { id: 'SHIPPER', name: 'Shipper'},
  { id: 'CONSIGNEE', name: 'Consignee'},
  { id: 'TRANSPORT_MANAGER', name: 'Transport / Warehouse Manager'},
]

export const OrganizationsEdit = () => (
    <Edit title={<OrganizationsTitle />}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="id" disabled/>
        <TextInput source="name" />
        <SelectInput source="kind" choices={OrganizationKindChoices} />
      </SimpleForm>
    </Edit>
  );

export const OrganizationCreate = () => (
      <Create>
        <SimpleForm>
          <TextInput source="name" />
          <SelectInput source="kind" choices={OrganizationKindChoices} />
          <NumberInput source="yearly_revenue" />
        </SimpleForm>
    </Create>
    );