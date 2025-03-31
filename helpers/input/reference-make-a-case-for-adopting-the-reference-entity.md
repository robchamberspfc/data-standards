This page refers to [Housing Associations Charitable Trust (HACT) UK Housing Data Standards (v3.5)](https://hact.org.uk/tools-and-services/uk-housing-data-standards/), published on 16 June 2022\.

## Benefits of adopting reference

Using this entity gives you a single version of the truth about tenants and assets. That makes it consistent and shareable with other organisations.

### Remove confusion

Identifiers that are clearly labelled allow you to find potential areas of confusion. This is known as disambiguation. 

For example, you might have two records of tenants that show the same name. That can create risks that you will:

* contact the wrong person and share confidential information  
* struggle to find hidden households, where families are living at the same address  
* carry out equalities monitoring inaccurately

Reference allows you to decide whether to trust the identifiers used and therefore work out whether they are the same person or different people.

| Example A small housing association in the Midlands has spotted ambiguous data in its tenant records. For instance, several tenants share common names such as "John Smith". This creates problems in identifying the correct individual for rent payments, maintenance requests, and tenant communications. Additionally, some records lack sufficient detail, such as incomplete addresses or missing contact information, further complicating matters.  The housing association applies the reference entity to its data and adds sources for every identifier. It can now identify whether individuals with the same name are really the same person. And where there’s gappy data it can first combine matching records to consolidate the data before it explores ways to fill any remaining gaps.  This saves them time and reduces their workload. |
| :---- |

### Spot duplicates and gaps

When data is combined from multiple datasets, identifiers may not be from the same source. This creates the risk of multiple entries for the same thing (such as a tenant or building), created by different sources. 

It can create risks you will, for example:

* overspend by paying for changes to one real-world thing twice  
* not meet compliance or safety requirements through missed inspections, inaccurate reporting or communication failures 

By being able to see where each one came from, you can easily identify the unnecessary extra data (a process known as deduplication). Being confident of which data to trust also helps spot missing records and other gaps in the data.

| Example A housing association in Manchester, which manages over 10,000 properties, has issues with duplicate records in its tenant database. This makes their communications inefficient, with some tenants receiving multiple letters for the same issue, while others are missed entirely. Additionally, repair requests are sometimes duplicated, causing confusion and delays in service. The housing association applies the reference entity to its data and adds sources for every identifier. It can now identify the duplicates, and set up its communications and repairs databases to use only the correct identifier in each instance.  This saves them time and reduces their workload. |
| :---- |

### Capture new data in the right place

When new information comes into the system, for example when a tenant telephones to log a repair, staff need to add the information to the right entry. 

If reference is used and deduplication has been done on the data, staff can be confident they only have access to reliable entries.

| Example A large housing association in London has a dataset of assets that has become messy over time. When they capture new data through processes like building surveys or reports from repairs people, it’s not clear where to add the data, and it’s making things even messier. This is having impacts on every aspect of the service.  The housing association applies the reference entity to its data and carries out processes like deduplication and disambiguation. Now whenever it gathers new data it can be confident it is adding it to the correct record.  This saves them time and reduces their workload. |
| :---- |

### Distinguish between identifiers 

There are many identifiers needed by housing providers, such for:

* buildings  
* tenants  
* fire safety cores  
* service charges   
* lifts

These can create confusion within a dataset.

Using reference on each identifier makes it easy to sort through to find relevant data on the specific identifier you are interested in.

| Example A housing association in the Northeast is getting confused between different kinds of records. The identifiers are similar in many cases. This slows down many kinds of data work. The housing association applies the reference entity to its data and adds the sources for each identifier. Based on the source of the data it is much easier to understand what kind of thing it represents.  This saves them time and reduces their workload. |
| :---- |

### See whether an identifier is official

Many systems generate identifiers automatically. It’s not always clear where these have come from, or that there is another entry with an identifier from a reliable source. 

A common example is the unique property reference number (UPRN), which is officially generated by the Geoplace’s Local Land and Property Gazetteer (Geoplace LLPG). However, some systems will automatically generate their own identifiers for properties but still call them UPRNs.

Reference makes it possible to identify the official entries.

| Example A housing association in Cornwall with 15,000 properties has spotted a lot of UPRNs in its data that it suspects are not from Geoplace LLPG. It has noticed that when its system generates identifiers automatically, it’s labelling them as UPRN without checking they are really from Geoplace. People trust the data as official when it actually is not.  The housing association applies the reference entity to its data and cross-references it against data from Geoplace LLPG. It can now assign a source to the official ones, and know that these are the only ones to trust from now on. If it does not know the sources of the identifiers that are inaccurately labelled as UPRNs, it can either replace the UPRN label, find out the real source or add a note in the description attribute of the reference entity to flag that these should not be trusted. This saves them time and reduces their workload. |
| :---- |

### Share data between systems and organisations, or through APIs

Different systems may use their own identifiers. When data is moved between them, entries do not always line up. This introduces potential confusion, errors and duplicates. 

You can add a column for a cross-system identifier, such as unique property reference number (UPRN), and apply the reference entity to this column and the system’s own identifier. This makes it possible to combine the new data with the existing dataset, quickly and accurately.

The same approach can help organisations share accurate and usable data between them, either directly or through application program interfaces (APIs).

| Example  A small housing association in the Midlands has messy data in many of the ways listed above. It cannot confidently: combine data within the systems it uses share data with other organisations such as repairs contractors provide its data through APIs for use elsewhere It is currently merging with another small local housing association, so these problems will create an even messier shared database.  The housing association applies the reference entity to its data and adds sources for every identifier. It can now sort out all the messes and combine the data with confidence, knowing records will match up correctly. This saves them time and reduces their workload. |
| :---- |

## Benefits to tenants

Using reference makes it easier to line up data on the same person across systems. This makes it possible to have a single source of truth for each tenant. 

This avoids unpleasant experiences for tenants like:

* being asked for the same information repeatedly   
* finding out a repairs team has turned up to a different address

## Benefits to staff

### Staff who manage data

Knowing where an identifier came from is essential for allowing systems to interact with each other. When implemented correctly, it makes it possible to automate this interoperability, reducing manual data cleansing work.

It also gives data professionals a tool for querying other datastores, to confidently see:

* what related data exists  
* how it can be used

### Staff who manage housing

Reference helps staff rely on information about tenants and buildings, such as the location of a property.

When staff create new data, such as after a site survey, reference can be used to successfully link the new data to the existing data. 

It allows them to:

* successfully share data with other organisations involved in housing services  
* coordinate their work

### Staff who manage people

Reference allows managers to combine data when producing strategic reports. 

It is especially useful when organisations merge as datasets can be combined quickly with a lot fewer errors.

## Case studies

[Sheffield’s linking of UPRNs to council tax data to support over 70’s living alone](https://www.local.gov.uk/case-studies/sheffields-linking-uprns-council-tax-data-support-over-70s-living-alone)
