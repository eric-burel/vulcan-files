import createResolverMultiple from './createResolverMultiple';
import createResolverSingle from './createResolverSingle';
import defaultResolveId from '../modules/defaultResolveId';

/**
 * Creates field's resolver.
 *
 * @param {Object} options Options
 * @param {String} options.fieldName
 *  Field name
 * @param {String} options.FSCollection
 *  FSCollection where to store the uploaded files as documents
 * @param {Boolean=} options.multiple=false
 *  Whether the field will be multiple or not
 * @param {Function=} options.resolveId=defaultResolveId
 *  Function used to retrieve the file id from the stored value in the file
 *  field in the document. Defaults to {@link defaultResolveId}
 * @return {Function} resolver
 */
export default function createResolver(options) {
  const {
    fieldName,
    FSCollection,
    multiple = false,
    resolveId = defaultResolveId,
  } = options;

  return multiple
    ? createResolverMultiple(fieldName, FSCollection, resolveId)
    : createResolverSingle(fieldName, FSCollection, resolveId);
}