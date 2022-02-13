import contactList from '../mockData/contactList';

export const getList = () => (
  contactList
);

export const getListByLabel = (labelName) => (
  contactList.filter((item) => (
    item.labels?.filter((label) => label === labelName)?.length
  ))
);

export const getListLength = () => (
  contactList.length
);

export const getListLengthByLabel = (labelName) => {
  const listItems = contactList.filter((item) => (
    item.labels?.filter((label) => label === labelName)?.length
  ));

  return listItems.length;
};
